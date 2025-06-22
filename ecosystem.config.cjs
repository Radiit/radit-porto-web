module.exports = {
  apps: [
    {
      name: "porto-radit",
      script: "npm",
      args: "run dev",
      cwd: "/var/www/radit-porto-web/",
      watch: false,
      env: {
        NODE_ENV: "development",
      },
    },
  ],
}; 