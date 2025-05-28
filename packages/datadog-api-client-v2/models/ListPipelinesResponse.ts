/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListPipelinesResponseMeta } from "./ListPipelinesResponseMeta";
import { ObservabilityPipelineData } from "./ObservabilityPipelineData";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Represents the response payload containing a list of pipelines and associated metadata.
*/
export class ListPipelinesResponse {
  /**
   * The `schema` `data`.
  */
  "data": Array<ObservabilityPipelineData>;
  /**
   * Metadata about the response.
  */
  "meta"?: ListPipelinesResponseMeta;

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
    "data": {
      "baseName": "data",
      "type": "Array<ObservabilityPipelineData>",
      "required": true,
    },
    "meta": {
      "baseName": "meta",
      "type": "ListPipelinesResponseMeta",
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




    return ListPipelinesResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









