/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type IncidentAttachmentAttachmentType = typeof LINK | typeof POSTMORTEM;
export const LINK = "link";
export const POSTMORTEM = "postmortem";
