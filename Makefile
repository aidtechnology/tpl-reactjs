.PHONY: *
.DEFAULT_GOAL:=help

## help: Prints this help message
help:
	@echo "Commands available"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' | sed -e 's/^/ /' | sort

## clean: Remove previous builds
clean:
	@-rm -rf dist

## test: Run all tests excluding vendor dependencies
test:
	npx tsc --noEmit
	npm run test

## build: Build production version
build:
	npm run build

## dev: Run development server
dev:
	npm run start

## format: Ensure code formatting is correct
format:
	npm run format

## watch: Watch files for changes and recompile/reload automatically
watch:
	npm run watch
