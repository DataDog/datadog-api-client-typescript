import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Owners of the group's open findings. `items` lists at most 5 owners, the owners of the most findings first,
 * then by name. `total` counts every distinct owner, so the list is cut when `total` is larger than the number
 * of items.
 */
export class RemediationGroupOwnerList {
  /**
   * Owners of the most findings in the group, at most 5.
   */
  "items": Array<string>;
  /**
   * Number of distinct owners across the group's findings.
   */
  "total": number;
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
    items: {
      baseName: "items",
      type: "Array<string>",
      required: true,
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
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
    return RemediationGroupOwnerList.attributeTypeMap;
  }

  public constructor() {}
}
