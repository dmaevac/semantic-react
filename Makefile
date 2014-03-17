BIN = ./node_modules/.bin
PATH := $(BIN):$(PATH)

lint:
	@jshint ./index.js lib/*.js

compile:
	@jshint ./index.js lib/*.js
	@jsx ./lib ./build

test: compile
	@zuul --local 3111 --ui tape ./tests/*.js