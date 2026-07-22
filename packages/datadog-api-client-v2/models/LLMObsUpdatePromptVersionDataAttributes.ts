/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptVersionLabel } from "./LLMObsPromptVersionLabel";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes for updating an LLM Observability prompt version. At least one of `description`, `labels`, or `env_ids` must be provided; all three attributes are optional individually.
*/
export class LLMObsUpdatePromptVersionDataAttributes {
  /**
   * Optional new description for this version.
  */
  "description"?: string;
  /**
   * Optional feature-flag environment UUIDs the service attempts to enable and configure to use this version as their default.
  */
  "envIds"?: Array<string>;
  /**
   * Optional new labels for this version. Do not use this attribute for new integrations.
  */
  "labels"?: Array<LLMObsPromptVersionLabel>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "description": {
      "baseName": "description",
      "type": "string",
    },
    "envIds": {
      "baseName": "env_ids",
      "type": "Array<string>",
    },
    "labels": {
      "baseName": "labels",
      "type": "Array<LLMObsPromptVersionLabel>",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return LLMObsUpdatePromptVersionDataAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









