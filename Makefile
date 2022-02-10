.PHONY: all
all: .generator .env
	@rm -rf packages/datadog-api-client-v*/models
	@pre-commit run --all-files --hook-stage=manual openapi-generator || true
	@rm -rf packages/datadog-api-client-v*/types/
	@rm packages/datadog-api-client-v*/middleware.ts
	@rm packages/datadog-api-client-v*/rxjsStub.ts
	@mkdir -p docs/v1 docs/v2
	@mv -f packages/datadog-api-client-v1/*.md docs/v1
	@mv -f packages/datadog-api-client-v2/*.md docs/v2
	@pre-commit run --all-files --hook-stage=manual lint || echo "modified files"

.PHONY: .env
.env:
	@echo "export UID=$(shell id -u)\nexport GID=$(shell id -g)" > $@
