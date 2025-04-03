import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsCIBatchMetadataCI } from "./SyntheticsCIBatchMetadataCI";
import { SyntheticsCIBatchMetadataGit } from "./SyntheticsCIBatchMetadataGit";

/**
 * Metadata for the Synthetic tests run.
 */
export class SyntheticsCIBatchMetadata {
  /**
   * Description of the CI provider.
   */
  "ci"?: SyntheticsCIBatchMetadataCI;
  /**
   * Git information.
   */
  "git"?: SyntheticsCIBatchMetadataGit;
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
    ci: {
      baseName: "ci",
      type: "SyntheticsCIBatchMetadataCI",
    },
    git: {
      baseName: "git",
      type: "SyntheticsCIBatchMetadataGit",
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
    return SyntheticsCIBatchMetadata.attributeTypeMap;
  }

  public constructor() {}
}
