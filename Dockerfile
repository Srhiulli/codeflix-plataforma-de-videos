FROM node:20.5.1-slim

USER node

WORkDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]