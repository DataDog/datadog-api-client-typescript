import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BulkMuteFindingsRequestProperties } from "./BulkMuteFindingsRequestProperties";

/**
 * The mute properties to be updated.
 */
export class BulkMuteFindingsRequestAttributes {
  /**
   * Object containing the new mute properties of the findings.
   */
  "mute": BulkMuteFindingsRequestProperties;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    mute: {
      baseName: "mute",
      type: "BulkMuteFindingsRequestProperties",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BulkMuteFindingsRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
