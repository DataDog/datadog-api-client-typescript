/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansListRequestAttributes } from "./SpansListRequestAttributes";
import { SpansListRequestType } from "./SpansListRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object containing the query content.
 */
export class SpansListRequestData {
  /**
   * The object containing all the query parameters.
   */
  "attributes"?: SpansListRequestAttributes;
  /**
   * The type of resource. The value should always be search_request.
   */
  "type"?: SpansListRequestType;

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
      type: "SpansListRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "SpansListRequestType",
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
    return SpansListRequestData.attributeTypeMap;
  }

  public constructor() {}
}
