.PHONY: all
all: .generator
	@rm -rf packages/datadog-api-client-v*/models
	@pre-commit run --all-files --hook-stage=manual generator-v1 || true
	@pre-commit run --all-files --hook-stage=manual generator-v2 || true
	@rm -rf packages/datadog-api-client-v*/types/
	@rm packages/datadog-api-client-v*/middleware.ts
	@rm packages/datadog-api-client-v*/rxjsStub.ts
	@rm packages/datadog-api-client-v*/models/all.ts
	@rm packages/datadog-api-client-v*/*.md
	@pre-commit run --all-files --hook-stage=manual lint || echo "modified files"
