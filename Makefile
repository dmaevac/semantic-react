BIN = ./node_modules/.bin
PATH := $(BIN):$(PATH)

lint:
	@jshint ./index.js lib/*.js

compile:
	@jsx --no-cache-dir ./lib ./build