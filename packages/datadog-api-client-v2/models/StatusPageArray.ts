/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPageArrayIncluded } from "./StatusPageArrayIncluded";
import { StatusPageData } from "./StatusPageData";
import { StatusPagesResponseMeta } from "./StatusPagesResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class StatusPageArray {
  "data": Array<StatusPageData>;
  /**
   * The included related resources of a status page. Client must explicitly request these resources by name in the `include` query parameter.
   */
  "included"?: Array<StatusPageArrayIncluded>;
  /**
   * Response metadata.
   */
  "meta"?: StatusPagesResponseMeta;

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
    meta: {
      baseName: "meta",
      type: "StatusPagesResponseMeta",
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
