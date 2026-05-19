/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseViewAttributes } from "./CaseViewAttributes";
import { CaseViewRelationships } from "./CaseViewRelationships";
import { CaseViewResourceType } from "./CaseViewResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A saved case view that provides a filtered, reusable list of cases matching a specific query. Views act as persistent dashboards for monitoring case subsets.
 */
export class CaseView {
  /**
   * Attributes of a case view, including the filter query and optional notification rule.
   */
  "attributes": CaseViewAttributes;
  /**
   * The view's identifier.
   */
  "id": string;
  /**
   * Related resources for the case view, including the creator, last modifier, and associated project.
   */
  "relationships"?: CaseViewRelationships;
  /**
   * JSON:API resource type for case views.
   */
  "type": CaseViewResourceType;

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
      type: "CaseViewAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "CaseViewRelationships",
    },
    type: {
      baseName: "type",
      type: "CaseViewResourceType",
      required: true,
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
    return CaseView.attributeTypeMap;
  }

  public constructor() {}
}
