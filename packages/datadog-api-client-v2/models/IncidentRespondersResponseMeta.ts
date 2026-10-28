/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentRespondersPagination } from "./IncidentRespondersPagination";
import { IncidentRespondersResponseMetaPage } from "./IncidentRespondersResponseMetaPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination metadata for the responder list.
 */
export class IncidentRespondersResponseMeta {
  /**
   * Total count for the responder list.
   */
  "page"?: IncidentRespondersResponseMetaPage;
  /**
   * Offset-based pagination for incident responders.
   */
  "pagination"?: IncidentRespondersPagination;

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
    page: {
      baseName: "page",
      type: "IncidentRespondersResponseMetaPage",
    },
    pagination: {
      baseName: "pagination",
      type: "IncidentRespondersPagination",
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
    return IncidentRespondersResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
