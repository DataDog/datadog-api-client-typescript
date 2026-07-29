import { UnparsedObject } from "@datadog/datadog-api-client";

import { ElasticCloudIntegration } from "./ElasticCloudIntegration";
import { TwilioIntegration } from "./TwilioIntegration";

/**
 * Strongly-typed, per-integration configuration. Exactly one integration variant is set, selected by its `type`.
 */
export type IntegrationAccountIntegration =
  | TwilioIntegration
  | ElasticCloudIntegration
  | UnparsedObject;
