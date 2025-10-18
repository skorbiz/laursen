import { useState, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { timelineData, TimelineEntry as TimelineEntryType } from "@/data/cv-timeline"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Copy, Check } from "lucide-react"
import { toast } from "sonner"
import { TimelineEntry } from "@/components/TimelineEntry"

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

  // Create a preview entry object from the current form state
  const previewEntry: TimelineEntryType = useMemo(() => ({
    title,
    text,
    date,
    startDate,
    image: selectedImage,
    largeBanner,
    tags: tags.split(",").map(t => t.trim()).filter(Boolean),
    category: category as "work" | "project" | "community",
    links: entry?.links || []
  }), [title, text, date, startDate, selectedImage, largeBanner, tags, category, entry?.links])
  
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
            
            <div className="relative">
              <TimelineEntry 
                entry={previewEntry} 
                isLast={true} 
                index={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
