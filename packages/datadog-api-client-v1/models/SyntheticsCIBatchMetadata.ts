/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsCIBatchMetadataCI } from "./SyntheticsCIBatchMetadataCI";
import { SyntheticsCIBatchMetadataGit } from "./SyntheticsCIBatchMetadataGit";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




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
    "ci": {
      "baseName": "ci",
      "type": "SyntheticsCIBatchMetadataCI",
    },
    "git": {
      "baseName": "git",
      "type": "SyntheticsCIBatchMetadataGit",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return SyntheticsCIBatchMetadata.attributeTypeMap;

  }

  public constructor() {











  }
}









