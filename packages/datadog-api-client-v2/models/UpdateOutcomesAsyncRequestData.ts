/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateOutcomesAsyncAttributes } from "./UpdateOutcomesAsyncAttributes";
import { UpdateOutcomesAsyncType } from "./UpdateOutcomesAsyncType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Scorecard outcomes batch request data.
 */
export class UpdateOutcomesAsyncRequestData {
  /**
   * The JSON:API attributes for a batched set of scorecard outcomes.
   */
  "attributes"?: UpdateOutcomesAsyncAttributes;
  /**
   * The JSON:API type for scorecard outcomes.
   */
  "type"?: UpdateOutcomesAsyncType;

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
    attributes: {
      baseName: "attributes",
      type: "UpdateOutcomesAsyncAttributes",
    },
    type: {
      baseName: "type",
      type: "UpdateOutcomesAsyncType",
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
    return UpdateOutcomesAsyncRequestData.attributeTypeMap;
  }

  public constructor() {}
}
