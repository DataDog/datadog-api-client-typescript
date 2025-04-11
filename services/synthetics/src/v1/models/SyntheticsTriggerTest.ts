import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsCIBatchMetadata } from "./SyntheticsCIBatchMetadata";

/**
 * Test configuration for Synthetics
 */
export class SyntheticsTriggerTest {
  /**
   * Metadata for the Synthetic tests run.
   */
  "metadata"?: SyntheticsCIBatchMetadata;
  /**
   * The public ID of the Synthetic test to trigger.
   */
  "publicId": string;
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
    metadata: {
      baseName: "metadata",
      type: "SyntheticsCIBatchMetadata",
    },
    publicId: {
      baseName: "public_id",
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
    return SyntheticsTriggerTest.attributeTypeMap;
  }

  public constructor() {}
}
