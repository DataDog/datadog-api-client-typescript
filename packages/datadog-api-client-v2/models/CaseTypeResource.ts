/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseTypeResourceAttributes } from "./CaseTypeResourceAttributes";
import { CaseTypeResourceType } from "./CaseTypeResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A case type that defines a classification category for cases. Each case type can have its own custom attributes, statuses, and automation rules.
 */
export class CaseTypeResource {
  /**
   * Attributes of a case type, which define a classification category for cases. Organizations use case types to model different workflows (for example, Security Incident, Bug Report, Change Request).
   */
  "attributes"?: CaseTypeResourceAttributes;
  /**
   * Case type's identifier
   */
  "id"?: string;
  /**
   * JSON:API resource type for case types.
   */
  "type"?: CaseTypeResourceType;

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
      type: "CaseTypeResourceAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CaseTypeResourceType",
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
    return CaseTypeResource.attributeTypeMap;
  }

  public constructor() {}
}
