import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Programming language
 */
export type Language =
  | typeof PYTHON
  | typeof JAVASCRIPT
  | typeof TYPESCRIPT
  | typeof JAVA
  | typeof GO
  | typeof YAML
  | typeof RUBY
  | typeof CSHARP
  | typeof PHP
  | typeof KOTLIN
  | typeof SWIFT
  | UnparsedObject;
export const PYTHON = "PYTHON";
export const JAVASCRIPT = "JAVASCRIPT";
export const TYPESCRIPT = "TYPESCRIPT";
export const JAVA = "JAVA";
export const GO = "GO";
export const YAML = "YAML";
export const RUBY = "RUBY";
export const CSHARP = "CSHARP";
export const PHP = "PHP";
export const KOTLIN = "KOTLIN";
export const SWIFT = "SWIFT";
