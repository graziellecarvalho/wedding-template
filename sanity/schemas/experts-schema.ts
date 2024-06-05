const expertsSchemas = {
  name: 'experts',
  title: 'Experts',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'city', title: 'City', type: 'string' },
    { name: 'state', title: 'State', type: 'string' },
    { name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ 
        type: "object",
        name: 'inline',
        fields: [
          { name: "title", title: 'Social', type: 'string', 
            options: {
              list: [
                { title: 'Instagram', value: 'instagram' },
                { title: 'Facebook', value: 'facebook' },
                { title: 'LinkedIn', value: 'linkedIn' },
                { title: 'Twitter', value: 'twitter' },
              ]
            }
          },
          { name: "url", title: 'URL', type: 'string' }
        ]
      }]
    },
  ]
}

export default expertsSchemas