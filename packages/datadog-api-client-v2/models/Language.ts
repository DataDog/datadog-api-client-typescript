/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
