FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye

# Install additional tools for web development
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    curl \
    wget \
    && apt-get autoremove -y && apt-get clean -y

# Set up npm global packages
RUN npm install -g @vitejs/create-vite prettier eslint

USER node