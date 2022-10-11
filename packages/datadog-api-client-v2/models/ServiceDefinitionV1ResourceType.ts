/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type ServiceDefinitionV1ResourceType =
  | typeof DOC
  | typeof WIKI
  | typeof RUNBOOK
  | typeof URL
  | typeof REPO
  | typeof DASHBOARD
  | typeof ONCALL
  | typeof CODE
  | typeof LINK;
export const DOC = "doc";
export const WIKI = "wiki";
export const RUNBOOK = "runbook";
export const URL = "url";
export const REPO = "repo";
export const DASHBOARD = "dashboard";
export const ONCALL = "oncall";
export const CODE = "code";
export const LINK = "link";
