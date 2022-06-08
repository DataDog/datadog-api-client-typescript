/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsCIBatchMetadataPipeline } from "./SyntheticsCIBatchMetadataPipeline";
import { SyntheticsCIBatchMetadataProvider } from "./SyntheticsCIBatchMetadataProvider";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsCIBatchMetadataCI.attributeTypeMap;
  }

  public constructor() {}
}
