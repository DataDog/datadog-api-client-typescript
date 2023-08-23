/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentServiceRelationships } from "./IncidentServiceRelationships";
import { IncidentServiceType } from "./IncidentServiceType";
import { IncidentServiceUpdateAttributes } from "./IncidentServiceUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident Service payload for update requests.
 */
export class IncidentServiceUpdateData {
  /**
   * The incident service's attributes for an update request.
   */
  "attributes"?: IncidentServiceUpdateAttributes;
  /**
   * The incident service's ID.
   */
  "id"?: string;
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
      type: "IncidentServiceUpdateAttributes",
    },
    id: {
      type: "string",
    },
    relationships: {
      type: "IncidentServiceRelationships",
    },
    type: {
      type: "IncidentServiceType",
      required: true,
    },
  };
}
