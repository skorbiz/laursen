import { Edit, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEditMode } from "./EditModeProvider"

export function EditModeToggle() {
  const { editMode, setEditMode } = useEditMode()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setEditMode(!editMode)}
      className="flex items-center gap-2"
    >
      <Eye className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all data-[edit=true]:-rotate-90 data-[edit=true]:scale-0" data-edit={editMode} />
      <Edit className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all data-[edit=true]:rotate-0 data-[edit=true]:scale-100" data-edit={editMode} />
      <span className="sr-only">Toggle edit mode</span>
    </Button>
  )
}
