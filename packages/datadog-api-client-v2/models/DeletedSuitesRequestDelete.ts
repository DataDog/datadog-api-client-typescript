/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeletedSuitesRequestDeleteAttributes } from "./DeletedSuitesRequestDeleteAttributes";
import { DeletedSuitesRequestType } from "./DeletedSuitesRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a bulk delete Synthetic test suites request.
 */
export class DeletedSuitesRequestDelete {
  /**
   * Attributes for a bulk delete Synthetic test suites request.
   */
  "attributes": DeletedSuitesRequestDeleteAttributes;
  /**
   * An optional identifier for the delete request.
   */
  "id"?: string;
  /**
   * Type for the bulk delete Synthetic suites request, `delete_suites_request`.
   */
  "type"?: DeletedSuitesRequestType;

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
      type: "DeletedSuitesRequestDeleteAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DeletedSuitesRequestType",
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
    return DeletedSuitesRequestDelete.attributeTypeMap;
  }

  public constructor() {}
}
