import { useState, useRef, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { timelineData } from "@/data/cv-timeline"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Copy, Check } from "lucide-react"
import { toast } from "sonner"

const importAssets = () => {
  const images = import.meta.glob('@/assets/*', { eager: true });
  const imageMap: Record<string, string> = {};
  
  Object.entries(images).forEach(([path, module]) => {
    const filename = path.split('/').pop();
    if (filename && (module as any).default) {
      imageMap[filename] = (module as any).default;
    }
  });
  
  return imageMap;
};

const assetImages = importAssets();

export default function EditPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const entry = timelineData.find((e, index) => String(index) === id)
  
  const [title, setTitle] = useState(entry?.title || "")
  const [text, setText] = useState(entry?.text || "")
  const [date, setDate] = useState(entry?.date || "")
  const [startDate, setStartDate] = useState(entry?.startDate || "")
  const [selectedImage, setSelectedImage] = useState(entry?.image || "")
  const [largeBanner, setLargeBanner] = useState(entry?.largeBanner || false)
  const [tags, setTags] = useState(entry?.tags?.join(", ") || "")
  const [category, setCategory] = useState(entry?.category || "project")
  const [copied, setCopied] = useState(false)
  
  // Image cropping state
  const [zoom, setZoom] = useState(1)
  const [offsetY, setOffsetY] = useState(50)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    if (canvasRef.current && selectedImage) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const img = new Image()
      
      img.onload = () => {
        const bannerHeight = largeBanner ? 192 : 96
        canvas.width = 512
        canvas.height = bannerHeight
        
        if (ctx) {
          const scale = zoom
          const imgWidth = img.width * scale
          const imgHeight = img.height * scale
          const x = (canvas.width - imgWidth) / 2
          const y = ((canvas.height - imgHeight) * offsetY) / 100
          
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(img, x, y, imgWidth, imgHeight)
        }
      }
      
      img.src = assetImages[selectedImage] || '/placeholder.svg'
    }
  }, [selectedImage, zoom, offsetY, largeBanner])
  
  if (!entry) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Button onClick={() => navigate("/")}>Back to Timeline</Button>
        </div>
      </div>
    )
  }
  
  const generatePrompt = () => {
    const prompt = `For post at index ${id}, update the following:
- Title: "${title}"
- Date: "${date}"${startDate ? `\n- Start Date: "${startDate}"` : ''}
- Image: "${selectedImage}"
- Large Banner: ${largeBanner}
- Text: "${text}"
- Tags: [${tags.split(",").map(t => `"${t.trim()}"`).join(", ")}]
- Category: "${category}"`
    
    return prompt
  }
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatePrompt())
    setCopied(true)
    toast.success("Prompt copied to clipboard!")
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Timeline
        </Button>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Edit Form */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Edit Post</h1>
            
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Start Date (optional)</Label>
                <Input
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="2023"
                />
              </div>
              <div>
                <Label htmlFor="date">End Date</Label>
                <Input
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="image">Image</Label>
              <select
                id="image"
                value={selectedImage}
                onChange={(e) => setSelectedImage(e.target.value)}
                className="w-full px-3 py-2 border border-input bg-background rounded-md"
              >
                {Object.keys(assetImages).map((imageName) => (
                  <option key={imageName} value={imageName}>
                    {imageName}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="largeBanner"
                checked={largeBanner}
                onChange={(e) => setLargeBanner(e.target.checked)}
                className="h-4 w-4"
              />
              <Label htmlFor="largeBanner">Large Banner</Label>
            </div>
            
            <div>
              <Label htmlFor="zoom">Image Zoom: {zoom.toFixed(2)}x</Label>
              <input
                type="range"
                id="zoom"
                min="0.5"
                max="3"
                step="0.1"
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <Label htmlFor="offsetY">Vertical Position: {offsetY}%</Label>
              <input
                type="range"
                id="offsetY"
                min="0"
                max="100"
                step="1"
                value={offsetY}
                onChange={(e) => setOffsetY(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 border border-input bg-background rounded-md"
              >
                <option value="work">Work</option>
                <option value="project">Project</option>
                <option value="community">Community</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="text">Description</Label>
              <Textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={6}
              />
            </div>
            
            <div>
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="ROS2, Navigation, AI"
              />
            </div>
            
            <div className="pt-4 border-t">
              <Label>AI Update Prompt</Label>
              <div className="mt-2 p-4 bg-muted rounded-md">
                <pre className="text-xs whitespace-pre-wrap">{generatePrompt()}</pre>
              </div>
              <Button
                onClick={copyToClipboard}
                className="mt-2 w-full"
                variant="secondary"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Prompt
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {/* Preview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Preview</h2>
            
            <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
              <div className={`w-full bg-muted overflow-hidden ${largeBanner ? 'h-48' : 'h-24'}`}>
                <canvas
                  ref={canvasRef}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {startDate ? `${startDate} - ${date}` : date}
                </p>
                <p className="text-sm text-muted-foreground mb-3">{text}</p>
                <div className="flex flex-wrap gap-1">
                  {tags.split(",").filter(t => t.trim()).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
