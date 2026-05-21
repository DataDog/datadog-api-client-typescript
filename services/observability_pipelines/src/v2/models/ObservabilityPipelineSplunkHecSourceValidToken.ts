import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSourceValidTokenFieldToAdd } from "./ObservabilityPipelineSourceValidTokenFieldToAdd";

/**
 * An accepted HEC token used to authenticate incoming Splunk HEC requests.
 */
export class ObservabilityPipelineSplunkHecSourceValidToken {
  /**
   * Indicates whether this token is currently accepted. Disabled tokens are rejected without
   * being removed from the configuration.
   */
  "enabled"?: boolean;
  /**
   * An optional metadata field that is attached to every event authenticated by the
   * associated token. Both `key` and `value` must match `^[A-Za-z0-9_]+$`.
   */
  "fieldToAdd"?: ObservabilityPipelineSourceValidTokenFieldToAdd;
  /**
   * Name of the environment variable or secret that holds the expected HEC token value.
   */
  "tokenKey": string;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    fieldToAdd: {
      baseName: "field_to_add",
      type: "ObservabilityPipelineSourceValidTokenFieldToAdd",
    },
    tokenKey: {
      baseName: "token_key",
      type: "string",
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
    return ObservabilityPipelineSplunkHecSourceValidToken.attributeTypeMap;
  }

  public constructor() {}
}
