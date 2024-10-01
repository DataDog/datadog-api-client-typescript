/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RestrictionQueryCreateData } from "./RestrictionQueryCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create a restriction query.
 */
export class RestrictionQueryCreatePayload {
  /**
   * Data related to the creation of a restriction query.
   */
  "data"?: RestrictionQueryCreateData;

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
      type: "RestrictionQueryCreateData",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RestrictionQueryCreatePayload.attributeTypeMap;
  }

  public constructor() {}
}
