/** @jsxImportSource woby */
import { $ } from 'woby'
import * as Icons from '@woby/icons'

interface IconComponent {
    name: string
    component: any
}

export const IconGallery = () => {
    const searchTerm = $('')

    // Create an array of icon components with their names
    const icons: IconComponent[] = Object.keys(Icons).map(name => ({
        name,
        component: Icons[name as keyof typeof Icons]
    }))

    // Filter icons based on search term
    const filteredIcons = () => {
        if (!searchTerm() || searchTerm().trim() === '') {
            return icons
        }

        const term = searchTerm().toLowerCase().trim()
        return icons.filter(icon =>
            icon.name.toLowerCase().includes(term)
        )
    }

    return (
        <div class="min-h-screen bg-gray-50 py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">Woby Feather Icons</h1>
                    <p class="text-gray-600">A collection of {icons.length} beautifully crafted open source icons</p>
                </div>

                <div class="mb-8">
                    <div class="relative max-w-xl mx-auto">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search icons..."
                            value={searchTerm}
                            onInput={(e: any) => searchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                    {filteredIcons().map((icon) => (
                        <div class="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center hover:shadow-md transition-shadow duration-200">
                            <div class="w-8 h-8 mb-2 text-gray-800">
                                <icon.component size={32} />
                            </div>
                            <div class="text-xs text-center text-gray-600 mt-2 break-words w-full">
                                {icon.name}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredIcons().length === 0 && searchTerm() && (
                    <div class="text-center py-12">
                        <svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 class="mt-2 text-lg font-medium text-gray-900">No icons found</h3>
                        <p class="mt-1 text-gray-500">Try adjusting your search term.</p>
                    </div>
                )}
            </div>
        </div>
    )
}