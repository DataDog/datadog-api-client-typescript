import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsCIBatchMetadataPipeline } from "./SyntheticsCIBatchMetadataPipeline";
import { SyntheticsCIBatchMetadataProvider } from "./SyntheticsCIBatchMetadataProvider";

/**
 * Description of the CI provider.
 */
export class SyntheticsCIBatchMetadataCI {
  /**
   * Description of the CI pipeline.
   */
  "pipeline"?: SyntheticsCIBatchMetadataPipeline;
  /**
   * Description of the CI provider.
   */
  "provider"?: SyntheticsCIBatchMetadataProvider;
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
    pipeline: {
      baseName: "pipeline",
      type: "SyntheticsCIBatchMetadataPipeline",
    },
    provider: {
      baseName: "provider",
      type: "SyntheticsCIBatchMetadataProvider",
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
    return SyntheticsCIBatchMetadataCI.attributeTypeMap;
  }

  public constructor() {}
}
