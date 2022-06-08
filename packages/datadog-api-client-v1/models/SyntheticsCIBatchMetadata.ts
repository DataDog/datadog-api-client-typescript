/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsCIBatchMetadataCI } from "./SyntheticsCIBatchMetadataCI";
import { SyntheticsCIBatchMetadataGit } from "./SyntheticsCIBatchMetadataGit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for the Synthetics tests run.
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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsCIBatchMetadata.attributeTypeMap;
  }

  public constructor() {}
}
