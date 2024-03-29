# frozen_string_literal: true
lock "3.16.0"

set :application, "tpbrandomizer"
set :repo_url, "git@github.com:luntzel/tpbrandomizer.git"

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/srv/www/kittylandlovecenter/tpbrandomizer"

set :ssh_options, { forward_agent: true, auth_methods: %w(publickey) }

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

namespace :deploy do

  desc "Install the project dependencies via yarn"
  task :npm do
    on roles(:web) do |host|
      within release_path do
        execute :yarn, "install"
      end
    end
  end

  after :updated, :npm

end
