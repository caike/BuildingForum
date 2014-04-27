<h3>Forum</h3>

<dl>
{{#each post in model}}
  <dt>{{post.title}}</dt>
  <dd>{{post.description}}</dd>
{{/each}}
</dl>
