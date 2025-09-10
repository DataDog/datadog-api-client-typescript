/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCreatePipelineEventRequestData } from "./CIAppCreatePipelineEventRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the pipeline events to create.
 */
export class CIAppCreatePipelineEventRequestRootDataArray {
  /**
   * Array of pipeline events to create in batch.
   */
  "data"?: Array<CIAppCreatePipelineEventRequestData>;

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
    data: {
      baseName: "data",
      type: "Array<CIAppCreatePipelineEventRequestData>",
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
    return CIAppCreatePipelineEventRequestRootDataArray.attributeTypeMap;
  }

  public constructor() {}
}
