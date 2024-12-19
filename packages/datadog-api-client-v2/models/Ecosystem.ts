/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The related vulnerability asset ecosystem.
 */

export type Ecosystem =
  | typeof PYPI
  | typeof MAVEN
  | typeof NUGET
  | typeof NPM
  | typeof RUBYGEMS
  | typeof GO
  | typeof PACKAGIST
  | typeof DDEB
  | typeof RPM
  | typeof APK
  | typeof WINDOWS
  | UnparsedObject;
export const PYPI = "PyPI";
export const MAVEN = "Maven";
export const NUGET = "NuGet";
export const NPM = "Npm";
export const RUBYGEMS = "RubyGems";
export const GO = "Go";
export const PACKAGIST = "Packagist";
export const DDEB = "Ddeb";
export const RPM = "Rpm";
export const APK = "Apk";
export const WINDOWS = "Windows";
