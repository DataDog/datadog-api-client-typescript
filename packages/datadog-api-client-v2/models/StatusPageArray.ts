/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPageArrayIncluded } from "./StatusPageArrayIncluded";
import { StatusPageData } from "./StatusPageData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class StatusPageArray {
  "data": Array<StatusPageData>;
  "included"?: Array<StatusPageArrayIncluded>;

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
      type: "Array<StatusPageData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<StatusPageArrayIncluded>",
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
    return StatusPageArray.attributeTypeMap;
  }

  public constructor() {}
}
