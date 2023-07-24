# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name = "boucle"
  spec.version = "0.1.0"
  spec.authors = ["Lucian"]
  spec.email = ["42606+exaluc@users.noreply.github.com"]

  spec.summary = "Boucle tailwindcss for jekyll"
  spec.description = "posts, notes, code snippets, data"
  spec.homepage = "https://github.com/exaluc/boucle"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 2.6.0"

  spec.metadata["allowed_push_host"] = "https://github.com"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/exaluc/boucle"
  spec.metadata["changelog_uri"] = "https://github.com/exaluc/boucle/CHANGELOG.md"

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir.chdir(__dir__) do
    `git ls-files -z`.split("\x0").reject do |f|
      (File.expand_path(f) == __FILE__) || f.match(%r{\A(?:(?:bin|test|spec|features)/|\.(?:git|circleci)|appveyor)})
    end
  end
  spec.files        += %w[assets/main.css]

  # Uncomment to register a new dependency of your gem
  # spec.add_dependency "example-gem", "~> 1.0"

  # For more information and examples about making a new gem, check out our
  # guide at: https://bundler.io/guides/creating_gem.html
end
