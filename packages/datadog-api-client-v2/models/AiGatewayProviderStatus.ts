/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayProviderStatusState } from "./AiGatewayProviderStatusState";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Read-only. Whether the provider is working, based on the model sync and live calls. Omitted for
 * providers that are never checked, which include providers without an integration account, and
 * Azure OpenAI and Gemini providers until live traffic records a status.
 */
export class AiGatewayProviderStatus {
  /**
   * Time of the last observation.
   */
  "checkedAt"?: Date;
  /**
   * Address of the models endpoint that the gateway called, for custom providers.
   */
  "endpoint"?: string;
  /**
   * Display text saying how to fix the provider. Clients render it as-is.
   */
  "fix"?: string;
  /**
   * HTTP status code that the provider returned.
   */
  "httpStatus"?: Int64;
  /**
   * Display text for the reason. Clients render it as-is.
   */
  "label"?: string;
  /**
   * Time of the last observation in which the provider worked.
   */
  "lastOkAt"?: Date;
  /**
   * The provider's own error message, with credentials removed. Never set for custom providers.
   */
  "message"?: string;
  /**
   * Why the provider is invalid, as a stable code such as `credentials_rejected`. Set only when `state` is `invalid`.
   */
  "reason"?: string;
  /**
   * Whether the provider is working. `checking` means no observation has been recorded yet, not that a
   * check is running.
   */
  "state": AiGatewayProviderStatusState;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    checkedAt: {
      baseName: "checked_at",
      type: "Date",
      format: "date-time",
    },
    endpoint: {
      baseName: "endpoint",
      type: "string",
    },
    fix: {
      baseName: "fix",
      type: "string",
    },
    httpStatus: {
      baseName: "http_status",
      type: "number",
      format: "int64",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    lastOkAt: {
      baseName: "last_ok_at",
      type: "Date",
      format: "date-time",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    reason: {
      baseName: "reason",
      type: "string",
    },
    state: {
      baseName: "state",
      type: "AiGatewayProviderStatusState",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayProviderStatus.attributeTypeMap;
  }

  public constructor() {}
}
