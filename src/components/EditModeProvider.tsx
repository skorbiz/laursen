import { createContext, useContext, useState } from "react"

type EditModeProviderProps = {
  children: React.ReactNode
}

type EditModeProviderState = {
  editMode: boolean
  setEditMode: (editMode: boolean) => void
}

const initialState: EditModeProviderState = {
  editMode: false,
  setEditMode: () => null,
}

const EditModeContext = createContext<EditModeProviderState>(initialState)

export function EditModeProvider({ children }: EditModeProviderProps) {
  const [editMode, setEditMode] = useState<boolean>(false)

  const value = {
    editMode,
    setEditMode,
  }

  return (
    <EditModeContext.Provider value={value}>
      {children}
    </EditModeContext.Provider>
  )
}

export const useEditMode = () => {
  const context = useContext(EditModeContext)

  if (context === undefined)
    throw new Error("useEditMode must be used within an EditModeProvider")

  return context
}
