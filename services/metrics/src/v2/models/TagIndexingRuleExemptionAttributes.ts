import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a tag indexing rule exemption.
 */
export class TagIndexingRuleExemptionAttributes {
  /**
   * Timestamp when the exemption was created.
   */
  "createdAt"?: Date;
  /**
   * Handle of the user who created the exemption.
   */
  "createdByHandle"?: string;
  /**
   * Discriminates between an explicit exemption (`exemption`) and a pre-existing legacy tag configuration acting as an implicit exclusion (`legacy_tag_configuration`).
   */
  "kind"?: string;
  /**
   * The reason the metric is exempt from tag indexing rules.
   */
  "reason"?: string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdByHandle: {
      baseName: "created_by_handle",
      type: "string",
    },
    kind: {
      baseName: "kind",
      type: "string",
    },
    reason: {
      baseName: "reason",
      type: "string",
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
    return TagIndexingRuleExemptionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
