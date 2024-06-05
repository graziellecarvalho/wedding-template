const toolsSchemas = {
  name: 'tools',
  title: 'Tools',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }},
    { name: 'decription', title: 'Description', type: 'string' },
    { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'alt',
          type: 'string'
        }
      ]
    },
    { name: 'icon', title: 'Icon', type: 'image', options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'alt',
          type: 'string'
        }
      ]
    },
    { name: 'toolType', title: 'Tool Type', type: 'string',
      options: {
        list: [
          { title: 'Professional', value: 'professional' },
          { title: 'Online', value: 'online' },
        ]
      }
    },
    { name: 'topExperts', title: 'Top Experts', type: 'array', of: [{ type: 'reference', to: [{ type: 'experts' }] }] },
    { name: 'experts', title: 'Experts', type: 'array', of: [{ type: 'reference', to: [{ type: 'experts' }] }] },
    // { name: 'experts', title: 'Experts', type: 'array', of: [{ type: 'experts' }] },

  ]
}

export default toolsSchemas