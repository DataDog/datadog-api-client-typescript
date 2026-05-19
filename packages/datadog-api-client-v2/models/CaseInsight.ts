/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseInsightType } from "./CaseInsightType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A reference to an external Datadog resource that provides investigative context for a case, such as a security signal, monitor alert, error tracking issue, or incident.
 */
export class CaseInsight {
  /**
   * The URL path or deep link to the insight resource within Datadog (for example, `/monitors/12345?q=total`).
   */
  "ref": string;
  /**
   * The unique identifier of the referenced Datadog resource (for example, a monitor ID, incident ID, or signal ID).
   */
  "resourceId": string;
  /**
   * The type of Datadog resource linked to the case as contextual evidence. Each type corresponds to a different Datadog product signal (for example, a security finding, a monitor alert, or an incident).
   */
  "type": CaseInsightType;

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
    ref: {
      baseName: "ref",
      type: "string",
      required: true,
    },
    resourceId: {
      baseName: "resource_id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseInsightType",
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
    return CaseInsight.attributeTypeMap;
  }

  public constructor() {}
}
