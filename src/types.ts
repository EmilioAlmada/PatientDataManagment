export interface Patient {
    id: string
    name: string
    avatar: string
    description: string
    website?: string
    createdAt: string
    [key: string]: any
}
