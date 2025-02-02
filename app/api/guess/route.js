import { NextResponse } from "next/server";
// import path from "path";
// import { useContext } from "react";
// import { GameState } from "@/app/context/game-context";

export async function POST(request) {
  // const gameState = useContext(GameState);
  const body = await request.json();
  const winnerGuess = body.winner;
  const dateGuess = Number(body.date);
  const marginGuess = Number(body.margin);
  const correctYear = Number(body.answer.year);
  const correctState = (body.answer.state);
  // console.log(1)
  // console.log(correctYear);
  // const filePath = path.join(
  //   process.cwd(),
  //   "app",
  //   "database",
  //   "solutions.json"
  // );
  // const solutions = JSON.parse(filePath);
  const solutions = {
    Presidential: {
      1932: {
        Alabama: "d70.6",
        Arizona: "d36.5",
        Arkansas: "d73.91",
        California: "d21",
        Colorado: "d13.4",
        Connecticut: "r1.14",
        Delaware: "r2.44",
        Florida: "d49.51",
        Georgia: "d83.83",
        Idaho: "d20.39",
        Illinois: "d13.19",
        Indiana: "d11.8",
        Iowa: "d17.7",
        Kansas: "d9.43",
        Kentucky: "d18.9",
        Louisiana: "d85.8",
        Maine: "r12.64",
        Maryland: "d25.5",
        Massachusetts: "d4",
        Michigan: "d7.92",
        Minnesota: "d23.62",
        Mississippi: "d92.43",
        Missouri: "d28.6",
        Montana: "d22.7",
        Nebraska: "d27.7",
        Nevada: "d38.82",
        "New Hampshire": "r1.43",
        "New Jersey": "d1.89",
        "New Mexico": "d26.9",
        "New York": "d12.74",
        "North Carolina": "d40.6",
        "North Dakota": "d41.6",
        Ohio: "d2.85",
        Oklahoma: "d46.6",
        Oregon: "d21.1",
        Pennsylvania: "r5.51",
        "Rhode Island": "d11.77",
        "South Carolina": "d98.14",
        "South Dakota": "d29.2",
        Tennessee: "d34",
        Texas: "d76.71",
        Utah: "d15.47",
        Vermont: "r16.58",
        Virginia: "d38.37",
        Washington: "d23.5",
        "West Virginia": "d10",
        Wisconsin: "d32.27",
        Wyoming: "d15.25",
      },
      1936: {
        Alabama: "d73.56",
        Arizona: "d42.92",
        Arkansas: "d63.94",
        California: "d35.25",
        Colorado: "d23.28",
        Connecticut: "d14.97",
        Delaware: "d9.77",
        Florida: "d52.18",
        Georgia: "d74.5",
        Idaho: "d29.8",
        Illinois: "d18.01",
        Indiana: "d14.7",
        Iowa: "d11.7",
        Kansas: "d7.72",
        Kentucky: "d18.6",
        Louisiana: "d77.6",
        Maine: "r13.97",
        Maryland: "d25.4",
        Massachusetts: "d9.46",
        Michigan: "d17.57",
        Minnesota: "d30.8",
        Mississippi: "d94.2",
        Missouri: "d22.6",
        Montana: "d41.7",
        Nebraska: "d16.4",
        Nevada: "d45.6",
        "New Hampshire": "d1.7",
        "New Jersey": "d19.97",
        "New Mexico": "d26.2",
        "New York": "d19.88",
        "North Carolina": "d46.8",
        "North Dakota": "d33.02",
        Ohio: "d20.55",
        Oklahoma: "d34.1",
        Oregon: "d34.78",
        Pennsylvania: "d16.04",
        "Rhode Island": "d12.92",
        "South Carolina": "d97.14",
        "South Dakota": "d11.53",
        Tennessee: "d38",
        Texas: "d74.76",
        Utah: "d39.55",
        Vermont: "r13.15",
        Virginia: "d40.84",
        "West Virginia": "d21.4",
        Wisconsin: "d33.54",
        Wyoming: "d23.11",
      },
      1940: {
        Alabama: "d70.88",
        Arizona: "d27.48",
        Arkansas: "d57.42",
        California: "d16.1",
        Colorado: "r2.5",
        Connecticut: "d7.14",
        Delaware: "d9.6",
        Florida: "d48.01",
        Georgia: "d70.02",
        Idaho: "d9.1",
        Illinois: "d2.43",
        Indiana: "r1.5",
        Iowa: "r4.4",
        Kansas: "r14.5",
        Kentucky: "d15.15",
        Louisiana: "d71.8",
        Maine: "r2.33",
        Maryland: "d17.5",
        Massachusetts: "d6.75",
        Michigan: "r0.33",
        Minnesota: "d3.8",
        Mississippi: "d91.51",
        Missouri: "d4.8",
        Montana: "d18.6",
        Nebraska: "r14.4",
        Nevada: "d20.2",
        "New Hampshire": "d6.44",
        "New Jersey": "d3.62",
        "New Mexico": "d13.3",
        "New York": "d3.55",
        "North Carolina": "d48.06",
        "North Dakota": "r10.9",
        Ohio: "d4.4",
        Oklahoma: "d15.2",
        Oregon: "d8.1",
        Pennsylvania: "d6.9",
        "Rhode Island": "d13.56",
        "South Carolina": "d91.26",
        "South Dakota": "r14.8",
        Tennessee: "d34.9",
        Texas: "d62.01",
        Utah: "d24.66",
        Vermont: "r9.86",
        Virginia: "d36.53",
        "West Virginia": "d14.2",
        Wisconsin: "d1.83",
        Wyoming: "d5.93",
      },
      1944: {
        Alabama: "d63.08",
        Arizona: "d17.9",
        Arkansas: "d40.1",
        California: "d13.51",
        Colorado: "r6.8",
        Connecticut: "d5.36",
        Delaware: "d9.1",
        Florida: "d40.64",
        Georgia: "d63.49",
        Idaho: "d3.5",
        Illinois: "d3.47",
        Indiana: "r5.7",
        Iowa: "r4.4",
        Kansas: "r21.1",
        Kentucky: "d9.3",
        Louisiana: "d61.2",
        Maine: "r4.99",
        Maryland: "d3.7",
        Massachusetts: "d5.81",
        Michigan: "d1.01",
        Minnesota: "d5.5",
        Mississippi: "d87.2",
        Missouri: "d3",
        Montana: "d9.4",
        Nebraska: "r17.2",
        Nevada: "d9.2",
        "New Hampshire": "d4.24",
        "New Jersey": "d1.36",
        "New Mexico": "d7.1",
        "New York": "d5.01",
        "North Carolina": "d33.4",
        "North Dakota": "r8.3",
        Ohio: "r0.36",
        Oklahoma: "d11.37",
        Oregon: "d4.84",
        Pennsylvania: "d2.78",
        "Rhode Island": "d17.33",
        "South Carolina": "d80.1",
        "South Dakota": "r16.6",
        Tennessee: "d21.3",
        Texas: "d54.78",
        Utah: "d21.02",
        Vermont: "r14.13",
        Virginia: "d24.97",
        "West Virginia": "d9.78",
        Wisconsin: "r1.8",
        Wyoming: "r2.46",
      },
      1948: {
        Alabama: "o79.75",
        Arizona: "d9.97",
        Arkansas: "d40.7",
        California: "d0.44",
        Colorado: "d5.4",
        Connecticut: "r1.64",
        Delaware: "r1.2",
        Florida: "d15.19",
        Georgia: "d40.5",
        Idaho: "d2.6",
        Illinois: "d0.85",
        Indiana: "r0.8",
        Iowa: "d2.7",
        Kansas: "r9",
        Kentucky: "d15.2",
        Louisiana: "o16.32",
        Maine: "r14.47",
        Maryland: "r1.4",
        Massachusetts: "d11.5",
        Michigan: "r1.66",
        Minnesota: "d17.3",
        Mississippi: "o77.08",
        Missouri: "d16.6",
        Montana: "d9.9",
        Nebraska: "r8.3",
        Nevada: "d3.1",
        "New Hampshire": "r5.75",
        "New Jersey": "r4.4",
        "New Mexico": "d13.5",
        "New York": "r0.99",
        "North Carolina": "d25.3",
        "North Dakota": "r8.8",
        Ohio: "d0.24",
        Oklahoma: "d25.5",
        Oregon: "r3.4",
        Pennsylvania: "r4.01",
        "Rhode Island": "d16.15",
        "South Carolina": "o47.83",
        "South Dakota": "r4.8",
        Tennessee: "d12.2",
        Texas: "d41.67",
        Utah: "d8.96",
        Vermont: "r24.62",
        Virginia: "d6.85",
        "West Virginia": "d15.1",
        Wisconsin: "d4.4",
        Wyoming: "d4.35",
      },
      1952: {
        Alabama: "d29.6",
        Arizona: "r16.7",
        Arkansas: "d12.1",
        California: "r14.56",
        Colorado: "r21.4",
        Connecticut: "r11.79",
        Delaware: "r3.9",
        Florida: "r10.02",
        Georgia: "d39.4",
        Idaho: "r31",
        Illinois: "r9.9",
        Indiana: "r17.12",
        Iowa: "r28.16",
        Kansas: "r38.27",
        Kentucky: "d0.07",
        Louisiana: "d5.8",
        Maine: "r32.28",
        Maryland: "r11.53",
        Massachusetts: "r8.76",
        Michigan: "r11.47",
        Minnesota: "r11.2",
        Mississippi: "d20.88",
        Missouri: "r1.57",
        Montana: "r19.3",
        Nebraska: "r38.3",
        Nevada: "r22.9",
        "New Hampshire": "r21.84",
        "New Jersey": "r14.82",
        "New Mexico": "r11.1",
        "New York": "r11.9",
        "North Carolina": "d7.8",
        "North Dakota": "r42.58",
        Ohio: "r13.52",
        Oklahoma: "r9.18",
        Oregon: "r21.61",
        Pennsylvania: "r5.89",
        "Rhode Island": "r1.84",
        "South Carolina": "d1.44",
        "South Dakota": "r38.54",
        Tennessee: "r0.28",
        Texas: "r6.44",
        Utah: "r17.86",
        Vermont: "r43.22",
        Virginia: "r12.96",
        "West Virginia": "d3.8",
        Wisconsin: "r22.24",
        Wyoming: "r25.62",
      },
      1956: {
        Alabama: "d17.13",
        Arizona: "r22",
        Arkansas: "d6.7",
        California: "r11.12",
        Colorado: "r19.7",
        Connecticut: "r27.46",
        Delaware: "r10.5",
        Florida: "r14.54",
        Georgia: "d33.8",
        Idaho: "r22.4",
        Illinois: "r19.23",
        Indiana: "r20.2",
        Iowa: "r18.4",
        Kansas: "r31.2",
        Kentucky: "r9.1",
        Louisiana: "r13.8",
        Maine: "r41.74",
        Maryland: "r20.1",
        Massachusetts: "r18.95",
        Michigan: "r11.48",
        Minnesota: "r7.6",
        Mississippi: "d33.77",
        Missouri: "d0.22",
        Montana: "r14.2",
        Nebraska: "r31",
        Nevada: "r15.9",
        "New Hampshire": "r32.27",
        "New Jersey": "r30.45",
        "New Mexico": "r16",
        "New York": "r22.41",
        "North Carolina": "d1.4",
        "North Dakota": "r23.6",
        Ohio: "r22.22",
        Oklahoma: "r10.2",
        Oregon: "r10.49",
        Pennsylvania: "r13.19",
        "Rhode Island": "r16.53",
        "South Carolina": "d15.9",
        "South Dakota": "r16.8",
        Tennessee: "r0.6",
        Texas: "r11.28",
        Utah: "r29.2",
        Vermont: "r44.35",
        Virginia: "r17.01",
        "West Virginia": "r8.2",
        Wisconsin: "r23.74",
        Wyoming: "r20.2",
      },
      1960: {
        Alabama: "o1.01",
        Alaska: "r1.88",
        Arizona: "r11.1",
        Arkansas: "d7.1",
        California: "r0.55",
        Colorado: "r9.7",
        Connecticut: "d7.47",
        Delaware: "d1.6",
        Florida: "r3.02",
        Georgia: "d25.1",
        Hawaii: "d0.06",
        Idaho: "r7.6",
        Illinois: "d0.18",
        Indiana: "r10.4",
        Iowa: "r13.5",
        Kansas: "r21.4",
        Kentucky: "r7.2",
        Louisiana: "d21.8",
        Maine: "r14.1",
        Maryland: "d7.2",
        Massachusetts: "d20.67",
        Michigan: "d2.01",
        Minnesota: "d1.4",
        Mississippi: "o2.65",
        Missouri: "d0.52",
        Montana: "r2.5",
        Nebraska: "r24.2",
        Nevada: "d2.32",
        "New Hampshire": "r6.84",
        "New Jersey": "d0.8",
        "New Mexico": "d0.8",
        "New York": "d5.26",
        "North Carolina": "d4.2",
        "North Dakota": "r10.9",
        Ohio: "r6.56",
        Oklahoma: "r18.04",
        Oregon: "r5.3",
        Pennsylvania: "d2.32",
        "Rhode Island": "d27.27",
        "South Carolina": "d2.4",
        "South Dakota": "r16.4",
        Tennessee: "r7.1",
        Texas: "d2",
        Utah: "r9.6",
        Vermont: "r17.3",
        Virginia: "r5.4",
        "West Virginia": "d5.4",
        Wisconsin: "r3.72",
        Wyoming: "r10.02",
      },
      1964: {
        Alabama: "r38.9",
        Alaska: "d31.82",
        Arizona: "r1",
        Arkansas: "d12.7",
        California: "d18.32",
        Colorado: "d23.08",
        Connecticut: "d35.72",
        Delaware: "d22.2",
        Florida: "d2.3",
        Georgia: "r8.25",
        Hawaii: "d57.52",
        Idaho: "d1.84",
        Illinois: "d18.94",
        Indiana: "d12.42",
        Iowa: "d23.96",
        Kansas: "d9.03",
        Kentucky: "d28.3",
        Louisiana: "r13.6",
        Maine: "d37.66",
        Maryland: "d31",
        Massachusetts: "d52.75",
        Michigan: "d33.6",
        Minnesota: "d27.8",
        Mississippi: "r74.28",
        Missouri: "d28.1",
        Montana: "d18.4",
        Nebraska: "d5.22",
        Nevada: "d17.2",
        "New Hampshire": "d27.78",
        "New Jersey": "d31.75",
        "New Mexico": "d19",
        "New York": "d37.25",
        "North Carolina": "d12.2",
        "North Dakota": "d16.09",
        Ohio: "d25.88",
        Oklahoma: "d11.5",
        Oregon: "d27.8",
        Pennsylvania: "d30.22",
        "Rhode Island": "d61.8",
        "South Carolina": "r17.8",
        "South Dakota": "d11.2",
        Tennessee: "d11",
        Texas: "d26.83",
        Utah: "d9.8",
        Vermont: "d32.61",
        Virginia: "d7.3",
        "West Virginia": "d35.8",
        Wisconsin: "d24.4",
        Wyoming: "d13.2",
      },
      1968: {
        Alabama: "o47.14",
        Alaska: "r2.63",
        Arizona: "r19.8",
        Arkansas: "o8.1",
        California: "r3.08",
        Colorado: "r9.2",
        Connecticut: "d5.16",
        Delaware: "r3.51",
        Florida: "r9.6",
        Georgia: "o12.4",
        Hawaii: "d21.13",
        Idaho: "r26.1",
        Illinois: "r2.93",
        Indiana: "r12.3",
        Iowa: "r12.19",
        Kansas: "r20.1",
        Kentucky: "r6.1",
        Louisiana: "o20.11",
        Maine: "d12.23",
        Maryland: "d1.65",
        Massachusetts: "d30.12",
        Michigan: "d6.72",
        Minnesota: "d12.5",
        Mississippi: "o40.44",
        Missouri: "r1.13",
        Montana: "r9",
        Nebraska: "r28",
        Nevada: "r8.2",
        "New Hampshire": "r8.17",
        "New Jersey": "r2.13",
        "New Mexico": "r12.1",
        "New York": "d5.46",
        "North Carolina": "r8.2",
        "North Dakota": "r17.71",
        Ohio: "r2.28",
        Oklahoma: "r15.7",
        Oregon: "r6",
        Pennsylvania: "d3.57",
        "Rhode Island": "d32.2",
        "South Carolina": "r5.8",
        "South Dakota": "r11.4",
        Tennessee: "r3.9",
        Texas: "d1.27",
        Utah: "r19.42",
        Vermont: "r9.22",
        Virginia: "r10.9",
        "West Virginia": "d8.8",
        Wisconsin: "r3.62",
        Wyoming: "r20.3",
      },
      1972: {
        Alabama: "r46.9",
        Alaska: "r23.49",
        Arizona: "r31.2",
        Arkansas: "r38.1",
        California: "r13.46",
        Colorado: "r28",
        Connecticut: "r18.44",
        Delaware: "r20.42",
        Florida: "r44.1",
        Georgia: "r50.3",
        Hawaii: "r25",
        Idaho: "r38.2",
        Illinois: "r18.52",
        Indiana: "r32.77",
        Iowa: "r17.13",
        Kansas: "r38.2",
        Kentucky: "r28.6",
        Louisiana: "r36.97",
        Maine: "r22.98",
        Maryland: "r23.9",
        Massachusetts: "d8.97",
        Michigan: "r14.39",
        Minnesota: "r5.5",
        Mississippi: "r58.6",
        Missouri: "r24.58",
        Montana: "r20",
        Nebraska: "r41",
        Nevada: "r27.36",
        "New Hampshire": "r29.13",
        "New Jersey": "r24.8",
        "New Mexico": "r24.5",
        "New York": "r17.3",
        "North Carolina": "r40.6",
        "North Dakota": "r26.28",
        Ohio: "r21.56",
        Oklahoma: "r49.7",
        Oregon: "r10.12",
        Pennsylvania: "r19.98",
        "Rhode Island": "r6.19",
        "South Carolina": "r42.7",
        "South Dakota": "r8.63",
        Tennessee: "r37.9",
        Texas: "r32.96",
        Utah: "r41.2",
        Vermont: "r26.19",
        Virginia: "r37.7",
        "West Virginia": "r27.2",
        Wisconsin: "r9.7",
        Wyoming: "r38.54",
      },
      1976: {
        Alabama: "d13.12",
        Alaska: "r22.25",
        Arizona: "r16.57",
        Arkansas: "d30.01",
        California: "r1.78",
        Colorado: "r11.47",
        Connecticut: "r5.16",
        Delaware: "d5.4",
        Florida: "d5.29",
        Georgia: "d33.78",
        Hawaii: "d2.53",
        Idaho: "r22.8",
        Illinois: "r1.97",
        Indiana: "r7.62",
        Iowa: "r1.01",
        Kansas: "r7.6",
        Kentucky: "d7.18",
        Louisiana: "d5.78",
        Maine: "r0.84",
        Maryland: "d6.08",
        Massachusetts: "d15.67",
        Michigan: "r5.39",
        Minnesota: "d12.88",
        Mississippi: "d1.88",
        Missouri: "d3.6",
        Montana: "r7.4",
        Nebraska: "r20.7",
        Nevada: "r4.36",
        "New Hampshire": "r11.28",
        "New Jersey": "r2.16",
        "New Mexico": "r2.5",
        "New York": "d4.43",
        "North Carolina": "d11.05",
        "North Dakota": "r5.86",
        Ohio: "d0.27",
        Oklahoma: "r1.21",
        Oregon: "r0.16",
        Pennsylvania: "d2.67",
        "Rhode Island": "d11.3",
        "South Carolina": "d13.04",
        "South Dakota": "r1.48",
        Tennessee: "d13",
        Texas: "d3.17",
        Utah: "r28.7",
        Vermont: "r10.20",
        Virginia: "r1.33",
        "West Virginia": "d16.14",
        Wisconsin: "d1.67",
        Wyoming: "r19.49",
      },
      1980: {
        Alabama: "r1.3",
        Alaska: "r27.94",
        Arizona: "r32.37",
        Arkansas: "r0.61",
        California: "r16.78",
        Colorado: "r24",
        Connecticut: "r9.64",
        Delaware: "r2.34",
        Florida: "r17.02",
        Georgia: "d14.81",
        Hawaii: "d1.9",
        Idaho: "r41.27",
        Illinois: "r7.93",
        Indiana: "r18.36",
        Iowa: "r12.71",
        Kansas: "r24.56",
        Kentucky: "r1.46",
        Louisiana: "r5.45",
        Maine: "r3.36",
        Maryland: "d2.94",
        Massachusetts: "r0.15",
        Michigan: "r6.49",
        Minnesota: "d3.94",
        Mississippi: "r1.33",
        Missouri: "r6.81",
        Montana: "r24.39",
        Nebraska: "r39.49",
        Nevada: "r35.65",
        "New Hampshire": "r29.39",
        "New Jersey": "r13.41",
        "New Mexico": "r18.19",
        "New York": "r2.67",
        "North Carolina": "r2.12",
        "North Dakota": "r37.97",
        Ohio: "r10.6",
        Oklahoma: "r25.53",
        Oregon: "r9.66",
        Pennsylvania: "r7.11",
        "Rhode Island": "d10.47",
        "South Carolina": "r1.53",
        "South Dakota": "r28.84",
        Tennessee: "r0.29",
        Texas: "r13.86",
        Utah: "r52.2",
        Vermont: "r5.96",
        Virginia: "r12.7",
        "West Virginia": "d4.5",
        Wisconsin: "r4.72",
        Wyoming: "r34.67",
      },
      1984: {
        Alabama: "r22.26",
        Alaska: "r36.78",
        Arizona: "r33.88",
        Arkansas: "r22.18",
        California: "r16.24",
        Colorado: "r28.32",
        Connecticut: "r21.9",
        Delaware: "r19.85",
        Florida: "r30.66",
        Georgia: "r20.38",
        Hawaii: "r11.28",
        Idaho: "r45.97",
        Illinois: "r12.87",
        Indiana: "r23.99",
        Iowa: "r7.38",
        Kansas: "r33.67",
        Kentucky: "r20.67",
        Louisiana: "r22.59",
        Maine: "r22.05",
        Maryland: "r5.49",
        Massachusetts: "r2.79",
        Michigan: "r18.99",
        Minnesota: "d0.18",
        Mississippi: "r24.39",
        Missouri: "r20.04",
        Montana: "r22.29",
        Nebraska: "r41.74",
        Nevada: "r33.88",
        "New Hampshire": "r37.71",
        "New Jersey": "r20.89",
        "New Mexico": "r20.47",
        "New York": "r8.01",
        "North Carolina": "r24.01",
        "North Dakota": "r31.04",
        Ohio: "r18.76",
        Oklahoma: "r37.94",
        Oregon: "r12.17",
        Pennsylvania: "r7.35",
        "Rhode Island": "r3.64",
        "South Carolina": "r27.98",
        "South Dakota": "r26.47",
        Tennessee: "r16.27",
        Texas: "r27.5",
        Utah: "r49.82",
        Vermont: "r17.11",
        Virginia: "r25.2",
        "West Virginia": "r10.51",
        Wisconsin: "r9.17",
        Wyoming: "r42.27",
      },
      1988: {
        Alabama: "r19.31",
        Alaska: "r23.32",
        Arizona: "r21.21",
        Arkansas: "r14.18",
        California: "r3.57",
        Colorado: "r7.78",
        Connecticut: "r5.11",
        Delaware: "r12.4",
        Florida: "r22.36",
        Georgia: "r20.25",
        Hawaii: "d9.52",
        Idaho: "r26.07",
        Illinois: "r2.09",
        Indiana: "r20.15",
        Iowa: "d10.21",
        Kansas: "r13.23",
        Kentucky: "r11.64",
        Louisiana: "r10.21",
        Maine: "r11.46",
        Maryland: "r2.91",
        Massachusetts: "d7.85",
        Michigan: "r7.9",
        Minnesota: "d7.01",
        Mississippi: "r20.82",
        Missouri: "r3.98",
        Montana: "r5.87",
        Nebraska: "r20.95",
        Nevada: "r20.94",
        "New Hampshire": "r26.16",
        "New Jersey": "r13.64",
        "New Mexico": "r4.96",
        "New York": "d4.10",
        "North Carolina": "r16.26",
        "North Dakota": "r13.06",
        Ohio: "r10.85",
        Oklahoma: "r16.65",
        Oregon: "d4.67",
        Pennsylvania: "r2.31",
        "Rhode Island": "d11.71",
        "South Carolina": "r23.92",
        "South Dakota": "r6.34",
        Tennessee: "r16.34",
        Texas: "r12.6",
        Utah: "r34.17",
        Vermont: "r3.52",
        Virginia: "r20.5",
        "West Virginia": "d4.74",
        Wisconsin: "d3.61",
        Wyoming: "r22.52",
      },
      1992: {
        Alabama: "r6.77",
        Alaska: "r9.17",
        Arizona: "r2",
        Arkansas: "d17.73",
        California: "d13.4",
        Colorado: "d4.26",
        Connecticut: "d6.43",
        Delaware: "d8.19",
        Florida: "r1.89",
        Georgia: "d0.59",
        Hawaii: "d11.39",
        Idaho: "r13.61",
        Illinois: "d14.24",
        Indiana: "r6.12",
        Iowa: "d6.02",
        Kansas: "r5.14",
        Kentucky: "d3.21",
        Louisiana: "d4.61",
        Maine: "d8.33",
        Maryland: "d14.18",
        Massachusetts: "d18.51",
        Michigan: "d7.39",
        Minnesota: "d11.63",
        Mississippi: "r8.91",
        Missouri: "d10.15",
        Montana: "d2.51",
        Nebraska: "r17.18",
        Nevada: "d2.63",
        "New Hampshire": "d1.22",
        "New Jersey": "d2.37",
        "New Mexico": "d8.56",
        "New York": "d15.85",
        "North Carolina": "r0.79",
        "North Dakota": "r12.04",
        Ohio: "d1.83",
        Oklahoma: "r8.63",
        Oregon: "d9.95",
        Pennsylvania: "d9.03",
        "Rhode Island": "d18.02",
        "South Carolina": "r8.14",
        "South Dakota": "r3.52",
        Tennessee: "d4.65",
        Texas: "r3.48",
        Utah: "r16.02",
        Vermont: "d15.69",
        Virginia: "r4.4",
        "West Virginia": "d13.02",
        Wisconsin: "d4.35",
        Wyoming: "r5.6",
      },
      1996: {
        Alabama: "r6.96",
        Alaska: "r17.53",
        Arizona: "d2.2",
        Arkansas: "d16.94",
        California: "d12.89",
        Colorado: "r1.37",
        Connecticut: "d18.14",
        Delaware: "d15.24",
        Florida: "d5.7",
        Georgia: "r1.17",
        Hawaii: "d25.29",
        Idaho: "r18.53",
        Illinois: "d17.51",
        Indiana: "r5.58",
        Iowa: "d10.34",
        Kansas: "r18.21",
        Kentucky: "d0.96",
        Louisiana: "d12.07",
        Maine: "d20.86",
        Maryland: "d15.98",
        Massachusetts: "d33.38",
        Michigan: "d13.21",
        Minnesota: "d16.14",
        Mississippi: "r5.13",
        Missouri: "d6.3",
        Montana: "r2.88",
        Nebraska: "r18.7",
        Nevada: "d1.02",
        "New Hampshire": "d9.95",
        "New Jersey": "d17.86",
        "New Mexico": "d7.32",
        "New York": "d28.86",
        "North Carolina": "r4.69",
        "North Dakota": "r6.81",
        Ohio: "d6.36",
        Oklahoma: "r7.81",
        Oregon: "d8.09",
        Pennsylvania: "d9.2",
        "Rhode Island": "d32.89",
        "South Carolina": "r6.04",
        "South Dakota": "r3.46",
        Tennessee: "d2.41",
        Texas: "r4.93",
        Utah: "r21.07",
        Vermont: "d22.26",
        Virginia: "r1.95",
        "West Virginia": "d14.75",
        Wisconsin: "d10.33",
        Wyoming: "r12.97",
      },
      2000: {
        Alabama: "r14.88",
        Alaska: "r30.95",
        Arizona: "r6.3",
        Arkansas: "r5.45",
        California: "d11.8",
        Colorado: "r8.36",
        Connecticut: "d17.47",
        Delaware: "d13.06",
        Florida: "r0.01",
        Georgia: "r11.69",
        Hawaii: "d18.3",
        Idaho: "r39.53",
        Illinois: "d12.02",
        Indiana: "r15.64",
        Iowa: "d0.32",
        Kansas: "r20.8",
        Kentucky: "r15.13",
        Louisiana: "r7.67",
        Maine: "d5.12",
        Maryland: "d16.39",
        Massachusetts: "d27.3",
        Michigan: "d5.14",
        Minnesota: "d2.41",
        Mississippi: "r16.92",
        Missouri: "r3.34",
        Montana: "r25",
        Nebraska: "r29",
        Nevada: "r3.54",
        "New Hampshire": "r1.27",
        "New Jersey": "d15.84",
        "New Mexico": "d0.06",
        "New York": "d25",
        "North Carolina": "r12.83",
        "North Dakota": "r27.6",
        Ohio: "r3.51",
        Oklahoma: "r21.88",
        Oregon: "d0.44",
        Pennsylvania: "d4.17",
        "Rhode Island": "d29.08",
        "South Carolina": "r15.92",
        "South Dakota": "r22.74",
        Tennessee: "r3.87",
        Texas: "r21.32",
        Utah: "r40.5",
        Vermont: "d9.93",
        Virginia: "r8.03",
        "West Virginia": "r6.33",
        Wisconsin: "d0.22",
        Wyoming: "r40.1",
      },
      2004: {
        Alabama: "r25.62",
        Alaska: "r25.55",
        Arizona: "r10.45",
        Arkansas: "r9.76",
        California: "d9.95",
        Colorado: "r4.67",
        Connecticut: "d10.36",
        Delaware: "d7.6",
        Florida: "r5.01",
        Georgia: "r16.6",
        Hawaii: "d8.75",
        Idaho: "r38.12",
        Illinois: "d10.34",
        Indiana: "r20.68",
        Iowa: "r0.67",
        Kansas: "r25.38",
        Kentucky: "r19.86",
        Louisiana: "r14.5",
        Maine: "d8.99",
        Maryland: "d12.98",
        Massachusetts: "d25.16",
        Michigan: "d3.42",
        Minnesota: "d3.48",
        Mississippi: "r19.69",
        Missouri: "r7.2",
        Montana: "r20.51",
        Nebraska: "r33.22",
        Nevada: "r2.59",
        "New Hampshire": "d1.37",
        "New Jersey": "d6.68",
        "New Mexico": "r0.79",
        "New York": "d18.29",
        "North Carolina": "r12.44",
        "North Dakota": "r27.36",
        Ohio: "r2.1",
        Oklahoma: "r31.14",
        Oregon: "d4.16",
        Pennsylvania: "d2.5",
        "Rhode Island": "d20.75",
        "South Carolina": "r17.08",
        "South Dakota": "r21.47",
        Tennessee: "r14.3",
        Texas: "r22.87",
        Utah: "r45.54",
        Vermont: "d20.14",
        Virginia: "r8.2",
        "West Virginia": "r12.86",
        Wisconsin: "d0.38",
        Wyoming: "r39.79",
      },
      2008: {
        Alabama: "r21.58",
        Alaska: "r21.53",
        Arizona: "r8.48",
        Arkansas: "r19.94",
        California: "d24.06",
        Colorado: "d8.95",
        Connecticut: "d22.37",
        Delaware: "d25.02",
        Florida: "d2.81",
        Georgia: "r5.2",
        Hawaii: "d45.27",
        Idaho: "r25.3",
        Illinois: "d25.14",
        Indiana: "d1.03",
        Iowa: "d9.54",
        Kansas: "r14.93",
        Kentucky: "r16.23",
        Louisiana: "r18.63",
        Maine: "d17.33",
        Maryland: "d25.45",
        Massachusetts: "d25.81",
        Michigan: "d16.44",
        Minnesota: "d10.24",
        Mississippi: "r13.17",
        Missouri: "r0.14",
        Montana: "r2.38",
        Nebraska: "r14.93",
        Nevada: "d12.5",
        "New Hampshire": "d9.86",
        "New Jersey": "d15.53",
        "New Mexico": "d15.13",
        "New York": "d26.85",
        "North Carolina": "d0.32",
        "North Dakota": "r8.65",
        Ohio: "d4.59",
        Oklahoma: "r31.3",
        Oregon: "d16.35",
        Pennsylvania: "d10.32",
        "Rhode Island": "d27.8",
        "South Carolina": "r8.97",
        "South Dakota": "r8.41",
        Tennessee: "r15.06",
        Texas: "r11.77",
        Utah: "r28.02",
        Vermont: "d37.01",
        Virginia: "d6.3",
        "West Virginia": "r13.09",
        Wisconsin: "d13.91",
        Wyoming: "r32.24",
      },
      2012: {
        Alabama: "r22.19",
        Alaska: "r13.99",
        Arizona: "r9.06",
        Arkansas: "r23.69",
        California: "d23.12",
        Colorado: "d5.36",
        Connecticut: "d17.33",
        Delaware: "d18.63",
        Florida: "d0.87",
        Georgia: "r7.82",
        Hawaii: "d42.71",
        Idaho: "r31.69",
        Illinois: "d16.87",
        Indiana: "r10.2",
        Iowa: "d5.81",
        Kansas: "r21.61",
        Kentucky: "r22.69",
        Louisiana: "r17.2",
        Maine: "d15.29",
        Maryland: "d26.07",
        Massachusetts: "d23.14",
        Michigan: "d9.5",
        Minnesota: "d7.69",
        Mississippi: "r11.5",
        Missouri: "r9.38",
        Montana: "r13.65",
        Nebraska: "r21.77",
        Nevada: "d6.68",
        "New Hampshire": "d5.58",
        "New Jersey": "d17.79",
        "New Mexico": "d10.15",
        "New York": "d28.18",
        "North Carolina": "r2.04",
        "North Dakota": "r19.62",
        Ohio: "d2.98",
        Oklahoma: "r33.54",
        Oregon: "d12.09",
        Pennsylvania: "d5.38",
        "Rhode Island": "d27.46",
        "South Carolina": "r10.47",
        "South Dakota": "r18.02",
        Tennessee: "r20.4",
        Texas: "r15.79",
        Utah: "r47.93",
        Vermont: "d35.6",
        Virginia: "d3.88",
        "West Virginia": "r26.76",
        Wisconsin: "d6.94",
        Wyoming: "r40.82",
      },
      2016: {
        Alabama: "r27.72",
        Alaska: "r14.73",
        Arizona: "r3.5",
        Arkansas: "r26.92",
        California: "d30.11",
        Colorado: "d4.91",
        Connecticut: "d13.64",
        Delaware: "d11.37",
        Florida: "r1.2",
        Georgia: "r5.13",
        Hawaii: "d32.52",
        Idaho: "r31.77",
        Illinois: "d17.07",
        Indiana: "r19.01",
        Iowa: "r9.41",
        Kansas: "r20.42",
        Kentucky: "r29.84",
        Louisiana: "r19.64",
        Maine: "d2.96",
        Maryland: "d26.42",
        Massachusetts: "d27.2",
        Michigan: "r0.2",
        Minnesota: "d1.51",
        Mississippi: "r17.8",
        Missouri: "r18.51",
        Montana: "r20.42",
        Nebraska: "r25.05",
        Nevada: "d2.42",
        "New Hampshire": "d0.37",
        "New Jersey": "d14.1",
        "New Mexico": "d8.22",
        "New York": "d22.63",
        "North Carolina": "r3.66",
        "North Dakota": "r35.73",
        Ohio: "r8.07",
        Oklahoma: "r36.39",
        Oregon: "d10.98",
        Pennsylvania: "r0.72",
        "Rhode Island": "d15.51",
        "South Carolina": "r14.27",
        "South Dakota": "r29.79",
        Tennessee: "r26",
        Texas: "r8.99",
        Utah: "r18.08",
        Vermont: "d25.96",
        Virginia: "d5.32",
        "West Virginia": "r42.07",
        Wisconsin: "r0.77",
        Wyoming: "r46.29",
      },
      2020: {
        Alabama: "r25.46",
        Alaska: "r10.06",
        Arizona: "d0.30",
        Arkansas: "r27.62",
        California: "d29.16",
        Colorado: "d13.50",
        Connecticut: "d20.03",
        Delaware: "d18.97",
        Florida: "r3.36",
        Georgia: "d0.23",
        Hawaii: "d29.46",
        Idaho: "r30.80",
        Illinois: "d16.99",
        Indiana: "r16.06",
        Iowa: "r8.20",
        Kansas: "r14.65",
        Kentucky: "r25.94",
        Louisiana: "r18.61",
        Maine: "d9.07",
        Maryland: "d33.21",
        Massachusetts: "d33.36",
        Michigan: "d2.78",
        Minnesota: "d7.12",
        Mississippi: "r16.54",
        Missouri: "r15.39",
        Montana: "r16.37",
        Nebraska: "r19.15",
        Nevada: "d2.39",
        "New Hampshire": "d7.35",
        "New Jersey": "d15.94",
        "New Mexico": "d10.79",
        "New York": "d23.13",
        "North Carolina": "r1.34",
        "North Dakota": "r33.35",
        Ohio: "r8.13",
        Oklahoma: "r33.08",
        Oregon: "d16.08",
        Pennsylvania: "d1.17",
        "Rhode Island": "d20.78",
        "South Carolina": "r11.68",
        "South Dakota": "r26.16",
        Tennessee: "r23.21",
        Texas: "r5.58",
        Utah: "r20.48",
        Vermont: "d35.42",
        Virginia: "d10.11",
        "West Virginia": "r38.93",
        Wisconsin: "d0.63",
        Wyoming: "r43.39",
      },
      2024: {
      Alabama: "r30.5",
      Alaska: "r13.13",
      Arizona: "r5.5",
      Arkansas: "r30.6",
      California: "d20.1",
      Colorado: "d11.0",
      Connecticut: "d14.5",
      Delaware: "d14.7",
      Florida: "r13.1",
      Georgia: "r2.2",
      Hawaii: "d23.1",
      Idaho: "r36.5",
      Illinois: "d10.9",
      Indiana: "r19.0",
      Iowa: "r13.2",
      Kansas: "r16.1",
      Kentucky: "r30.5",
      Louisiana: "r22.0",
      Maine: "d6.9",
      Maryland: "d28.5",
      Massachusetts: "d25.2",
      Michigan: "r1.4",
      Minnesota: "d4.2",
      Mississippi: "r22.9",
      Missouri: "r18.4",
      Montana: "r19.9",
      Nebraska: "r20.5",
      Nevada: "r3.1",
      "New Hampshire": "d2.8",
      "New Jersey": "d5.9",
      "New Mexico": "d6.0",
      "New York": "d12.6",
      "North Carolina": "r3.2",
      "North Dakota": "r36.4",
      Ohio: "r11.2",
      Oklahoma: "r34.3",
      Oregon: "d14.3",
      Pennsylvania: "r1.7",
      "Rhode Island": "d13.8",
      "South Carolina": "r17.9",
      "South Dakota": "r29.2",
      Tennessee: "r29.7",
      Texas: "r13.7",
      Utah: "r21.6",
      Vermont: "d31.5",
      Virginia: "d5.8",
      "West Virginia": "r41.9",
      Wisconsin: "r0.86",
      Wyoming: "r45.8"
    },
    },
    Senatorial: {},
    Gubernatorial: {},
    Other: {},
  };
  const correctWinner = solutions["Presidential"][`${correctYear}`][`${correctState}`][0];
  const correctMargin = Number(solutions["Presidential"][`${correctYear}`][`${correctState}`].substring(1));
  // console.log(correctMargin);
  let correctWinnerName = "";
  if (correctWinner === "r") {
    correctWinnerName = "Republican";
  } else if (correctWinner === "d") {
    correctWinnerName = "Democratic";
  } else {
    correctWinnerName = "Independent or Third Party";
  }
  // if ((correctWinner == "d" && winnerGuess == "D") || (correctWinner == "r" && winnerGuess == "R") || (correctWinner == "i" && winnerGuess == "I")) {

  // }
  let winnerRes =((correctWinner === "d" && winnerGuess === "D") || (correctWinner === "r" && winnerGuess === "R") || (correctWinner === "o" && winnerGuess === "I")) ? "Correct!" : "Incorrect!";
  


  let marginRes = (Math.max(marginGuess, correctMargin) - Math.min(marginGuess, correctMargin) <= 2) ? "Correct!" : "Incorrect!";
  let dateRes = (Math.max(dateGuess, correctYear) - Math.min(dateGuess, correctYear) <= 2) ? "Correct!" : "Incorrect!";
  // console.log(winnerRes, marginRes, dateRes);
  let totalRes;
  // console.log((winnerRes === "Correct!") && (marginRes === "Correct!") && (dateRes === "Correct!"));
  // if (winnerRes === marginRes === dateRes === "Correct!") {
  if ((winnerRes === "Correct!") && (marginRes === "Correct!") && (dateRes === "Correct!")) {
    totalRes = "Correct!";
  } else if (winnerRes === "Correct!" || marginRes === "Correct!" || dateRes === "Correct!") {
    totalRes = "Partially Correct!";
  } else {
    totalRes = "Incorrect!";
  }
  return NextResponse.json({
    status: "OK",
    data: {
      echo: `${totalRes} The ${correctWinnerName} candidate won the ${correctYear} United States Presidential Election in ${correctState} by a margin of ${correctMargin}%.`,
    },
  });
}
