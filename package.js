Package.describe({
  name: 'colada:bootstrap-toolkit',
  version: '1.0.0',
  summary: 'Bootstrap toolkit generated from maciej-gurban Responsive Bootstrap Toolkit',
  git: 'https://github.com/ColadaFF/Bootstrap-toolkit',
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.use('nemo64:bootstrap@3.3.5_2');
  api.addFiles("bootstrap-toolkit.js", "client");
  api.export("ResponsiveBootstrapToolkit", "client");
});

