/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentServiceCreateAttributes } from "./IncidentServiceCreateAttributes";
import { IncidentServiceRelationships } from "./IncidentServiceRelationships";
import { IncidentServiceType } from "./IncidentServiceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident Service payload for create requests.
 */
export class IncidentServiceCreateData {
  /**
   * The incident service's attributes for a create request.
   */
  "attributes"?: IncidentServiceCreateAttributes;
  /**
   * The incident service's relationships.
   */
  "relationships"?: IncidentServiceRelationships;
  /**
   * Incident service resource type.
   */
  "type": IncidentServiceType;

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
      type: "IncidentServiceCreateAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentServiceRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentServiceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentServiceCreateData.attributeTypeMap;
  }

  public constructor() {}
}
