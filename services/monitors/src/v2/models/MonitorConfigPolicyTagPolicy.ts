import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Tag attributes of a monitor configuration policy.
 */
export class MonitorConfigPolicyTagPolicy {
  /**
   * The key of the tag.
   */
  "tagKey"?: string;
  /**
   * If a tag key is required for monitor creation.
   */
  "tagKeyRequired"?: boolean;
  /**
   * Valid values for the tag.
   */
  "validTagValues"?: Array<string>;
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
    tagKey: {
      baseName: "tag_key",
      type: "string",
    },
    tagKeyRequired: {
      baseName: "tag_key_required",
      type: "boolean",
    },
    validTagValues: {
      baseName: "valid_tag_values",
      type: "Array<string>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorConfigPolicyTagPolicy.attributeTypeMap;
  }

  public constructor() {}
}
