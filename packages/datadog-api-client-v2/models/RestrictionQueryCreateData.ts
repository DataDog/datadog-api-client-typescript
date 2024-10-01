/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsRestrictionQueriesType } from "./LogsRestrictionQueriesType";
import { RestrictionQueryCreateAttributes } from "./RestrictionQueryCreateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data related to the creation of a restriction query.
 */
export class RestrictionQueryCreateData {
  /**
   * Attributes of the created restriction query.
   */
  "attributes"?: RestrictionQueryCreateAttributes;
  /**
   * Restriction query resource type.
   */
  "type"?: LogsRestrictionQueriesType;

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
      type: "RestrictionQueryCreateAttributes",
    },
    type: {
      baseName: "type",
      type: "LogsRestrictionQueriesType",
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
    return RestrictionQueryCreateData.attributeTypeMap;
  }

  public constructor() {}
}
